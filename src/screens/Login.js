//import * as React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
} from "native-base";
import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";

const Login = () => {
  const { login } = useAuthContext();

  const [form, setForm] = useState({ correo: "", password: "" });
  const [error, setError] = useState([]);

  const { correo, password } = form;

  const onChangeHandler = (value, name) => {
    // how to handle for each state field
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    console.log("Presionado");
    /* const resp = await fetchSinToken(
      "api/v1/auth/login",
      { correo, password },
      "POST"
    );
    const { usuario, token, msg } = await resp.json();

    if (resp.ok) {
      login();
    } else {
      setError(msg);
    } */
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
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
            Iniciar sesión
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
