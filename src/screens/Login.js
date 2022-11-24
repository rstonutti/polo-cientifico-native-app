//import * as React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  Text,
} from "native-base";
import { useState } from "react";
import { fetchSinToken } from "../helpers/fetch";
import useAuthContext from "../hooks/useAuthContext";

const Login = () => {
  const { login } = useAuthContext();

  const [form, setForm] = useState({
    correo: "",
    password: "",
  });
  const [error, setError] = useState([]);

  const onChangeHandler = (name, value) => {
    // how to handle for each state field
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const resp = await fetchSinToken("api/v1/auth/login", form, "POST");
    const data = await resp.json();

    if (resp.ok) {
      login();
    } else {
      console.log(data.msg);
      setError(data.errors || [{ param: "database", msg: data.msg }]);
      console.log(error, "aver");
    }
  };

  return (
    <Center w="100%" height={"100%"}>
      <Box
        borderRadius={15}
        backgroundColor={"red.500"}
        safeArea
        w="90%"
        maxW="290"
        p="8"
      >
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="bold"
          fontSize={20}
          textAlign={"center"}
        >
          Bienvenido a
        </Heading>
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="bold"
          fontSize={20}
          textAlign={"center"}
        >
          ipf-devs
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Correo</FormControl.Label>
            <Input
              //isInvalid={errors.correo ? true : false}
              color="#c1e1a7"
              selectionColor="#c1e1a7"
              my="2"
              type="text"
              placeholder="Ingrese su correo..."
              onChangeText={(value) => onChangeHandler("correo", value)}
            />
            {error.length != 0 &&
              error.map(
                (errors) =>
                  errors.param === "correo" && (
                    <Center>
                      <Text>{errors.msg}</Text>
                    </Center>
                  )
              )}
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input
              color="#c1e1a7"
              selectionColor="#c1e1a7"
              my="2"
              type="password"
              placeholder="Ingrese su contraseña..."
              onChangeText={(value) => onChangeHandler("password", value)}
            />
            {error.length != 0 &&
              error.map(
                (errors) =>
                  errors.param === "password" && (
                    <Center>
                      <Text>{errors.msg}</Text>
                    </Center>
                  )
              )}
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
            Iniciar sesión
          </Button>
          {error.length != 0 &&
            error.map(
              (errors) =>
                errors.param === "database" && (
                  <Center>
                    <Text>{errors.msg}</Text>
                  </Center>
                )
            )}
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
