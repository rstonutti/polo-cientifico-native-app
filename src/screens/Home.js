import React, { useEffect, useState } from "react";
import { Box, Center, Text, ScrollView } from "native-base";
import { fetchSinToken } from "../helpers/fetch";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetchSinToken("api/v1/publicaciones");
      const data = await resp.json();
      if (resp.ok) {
        setPosts(data.publicaciones);
        setLoading(false);
      } else {
        setErrors(msg);
      }
    };
    getPosts();
  }, []);

  return (
    <Center
      backgroundColor={"#0e2c40"}
      height="100%"
      width="100%"
      justifyContent="flex-start"
    >
      <Box
        backgroundColor={"#c1e1a7"}
        width="95%"
        height="15%"
        borderRadius={15}
        justifyContent="flex-end"
        padding={5}
        margin={5}
      >
        <Text color={"#0e2c40"} fontSize={20}>
          General
        </Text>
      </Box>
      {/* <Input width="90%" height="5%" marginBottom={5} /> */}

      {loading ? (
        <Center>
          <Text>Espere...</Text>
        </Center>
      ) : (
        <ScrollView
          width="100%"
          contentContainerStyle={{ alignItems: "center" }}
        >
          {posts.map((post) => (
            <Post key={post.uid} {...post} />
          ))}
        </ScrollView>
      )}
    </Center>
  );
};

export default Home;
