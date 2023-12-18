import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
        setCoins(data);
        setLoading(false);
      }
      catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);
  if (error) {
    return <Text>Something went wrong</Text>;
  }
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
        <Heading size={"lg"} mb={"4"}>Top 100 Coins</Heading>
          <HStack wrap={"wrap"}>
            {coins.map((coin, i) => {
              return (
                <CoinCard
                  key={i}
                  name={coin.name}
                  img={coin.image}
                  current_price={coin.current_price}
                  url={coin.url}
                />
              );
            })}
          </HStack>
        </Fragment>
      )}
    </Container>
  );
};

const CoinCard = ({ name, img, current_price, url }) => {
  return (
    <a href={url} target={"_blank"}>
      <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.4s"} margin={"4"}
        css={{
          "&:hover": {
            transform : "scale(1.05)",
          }
        }}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"coins"}
        />
        <Heading size={"md"} noOfLines={1}>
          {current_price}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );
};

export default Coins