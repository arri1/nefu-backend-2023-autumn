import { useState } from 'react';
import { Route, Router, Text, ButtonGroup, Button, useText, Image, Dialog, DialogStep } from '@urban-bot/core';
import fs from 'fs';
import logo from './assets/logo.png';
import { useQuery, gql, useMutation } from '@apollo/client';

const FIND_MANY_USER = gql`
  query FindManyUser {
    findManyUser {
      email
      id
      password
    }
  }
`;
const CREATE_ONE_USER = gql`
  mutation CreateOneUser($data: UserCreateInput!) {
    createOneUser(data: $data) {
      id
    }
  }
`;

const file = fs.readFileSync(logo);

function Echo() {
    const [text, setText] = useState('Say something');

    useText(({ text }) => {
        setText(text);
    });

    return (
        <Text>
            <i>{text}</i>
        </Text>
    );
}

function Logo() {
    const [title, setTitle] = useState('Urban Bot');

    const addRobot = () => {
        setTitle(title + '🤖');
    };

    return (
        <Image
            title={title}
            file={file}
            buttons={
                <ButtonGroup>
                    <Button onClick={addRobot}>Add robot</Button>
                </ButtonGroup>
            }
        />
    );
}

function User() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, error, data, refetch } = useQuery(FIND_MANY_USER);
    const [
      createUser,
      {
        data: dataCreateUser,
        loading: loadingCreateUser,
        error: errorCreateUser,
      },
    ] = useMutation(CREATE_ONE_USER);
    return (
        <Dialog onFinish={
            createUser({
                variables: {
                  data: {
                    email,
                    password,
                  },
                },
              })
                .then((data) => {
                  refetch();
                  console.log("user create");
                })
                .catch((e) => {
                  console.log(e.message);
                })
        }>
            <DialogStep
                content={
                    <ButtonGroup title="Привет, вы хотите зарегистрироваться?">
                        <Button id="set">Да</Button>
                        <Button id="get">Нет</Button>
                    </ButtonGroup>
                }
            >
                <DialogStep
                    match="set"
                    content={
                        <Text>Напишите ваш email</Text>
                    }
                    id="email"
                    onNext={(email) => setEmail(email)}
                >
                    <DialogStep
                        content={
                            <Text>Напишите ваш пароль</Text>
                        }
                        id="password"
                        onNext={(password) => setPassword(password)}
                    >
                        <DialogStep
                            content={<Text>Type /watch to watch users list!</Text>}
                />
                    </DialogStep>
                </DialogStep>
                <DialogStep
                    match="get"
                    content={<Text>Welcome to Urban Bot! Type /echo or /logo or /user or /watch.</Text>}
                />
            </DialogStep>
        </Dialog>
    );
}

function List() {
    const { loading, error, data, refetch } = useQuery(FIND_MANY_USER);
    const users = [];
    if (!loading) data?.findManyUser?.map((item) => {
      users.push(item.email)
    });
    return (
        <Text>{users.toString()}</Text>
    );
}

export function App() {
    return (
        <>
            <Text>Welcome to Urban Bot! Type /echo or /logo or /reg or /watch.</Text>
            <Router>
                <Route path="/echo">
                    <Echo />
                </Route>
                <Route path="/logo">
                    <Logo />
                </Route>
                <Route path="/reg">
                    <User />
                </Route>
                <Route path="/watch">
                    <List />
                </Route>
            </Router>
        </>
    );
}

export default App;
