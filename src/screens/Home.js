import React, { useEffect, useState } from "react";
import { Box, Center, Text, ScrollView, Button } from "native-base";
import { fetchSinToken } from "../helpers/fetch";
import Post from "../components/Post";
import useAuthContext from "../hooks/useAuthContext";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const { logout } = useAuthContext();

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
      backgroundColor={"#fff"}
      height="100%"
      width="100%"
      justifyContent="flex-start"
    >
      <Box
        backgroundColor={"#2f3e46"}
        width="95%"
        height="15%"
        borderRadius={15}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        flexDirection={"row"}
        padding={5}
        mt={10}
        mb={5}
      >
        <Text color={"#fff"} fontSize={25} fontWeight={"bold"}>
          General
        </Text>
        <Button
          mt="2"
          colorScheme="green"
          onPress={() => {
            logout();
          }}
        >
          Logout
        </Button>
      </Box>
      {/* <Input width="90%" height="5%" marginBottom={5} /> */}
      {loading ? (
        <Center>
          <Text height={"100%"} fontSize={20}>
            Espere...
          </Text>
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
