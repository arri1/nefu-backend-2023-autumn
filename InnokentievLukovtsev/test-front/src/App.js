import {useQuery, gql, useMutation, useLazyQuery} from "@apollo/client";
import React, {useState} from "react";
import Modal from "./modal/Modal";
import "./styles.css";
import prisma from "prisma/prisma-client/index-browser";

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

const GET_USER = gql`
    query FindUniqueUser($where: UserWhereUniqueInput!) {
        findUniqueUser(where: $where) {
            id
            name
            email
        }
    }
`;

const LOGIN_USER = gql`
    query FindUniqueUser($where: UserWhereUniqueInput!){
        findUniqueUser(where: $where){
            email
            password
        }
    }
`

const App = () => {
    // const emailInputRef = useRef();
    // const nameInputRef = useRef();
    // const passwordInputRef = useRef();

    // const email = emailInputRef.current.value;
    // const name = nameInputRef.current.value;
    // const password = passwordInputRef.current.value;

    // const password = bcrypt.hashSync(input_password, "$2a$10$CwTycUXWue0Thq9StjUM0u");

    const [RegActive, setRegActive] = useState(false);
    const [ListActive, setListActive] = useState(false);
    const [SignActive, setSignActive] = useState(false);

    const [email, setEmail] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const {loading, error, data, refetch} = useQuery(FIND_MANY_USER);

    const [createUser, {
        data: dataCreateUser, loading: loadingCreateUser, error: errorCreateUser
    }] = useMutation(CREATE_ONE_USER);

    const [id, setId] = useState("")

    const [getUser, {loading: Userloading, error: Usererror, where: Userdata}] = useLazyQuery(GET_USER)

    const [loginUser, {loading: loginLoading, error:loginError, where: loginData}] = useLazyQuery(LOGIN_USER)

    return (<div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            height: "100vh",
            background: "gray"
        }}
    >
        <button className={"open-btn"} onClick={() => setRegActive(true)}> Registration</button>

        <Modal active={RegActive} setActive={setRegActive}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                background: "grey"
            }}>
                <input placeholder={"Email"} style={{marginTop: 10}}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder={"Name"} value={name} onChange={e => setName(e.target.value)}
                       style={{marginTop: 10}}/>
                <input placeholder={"Password"} type={"password"}
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       style={{marginTop: 10}}
                />
                <button
                    className={"open-btn"}
                    style={{marginTop: 20, width: 100, height: 30, marginBottom: 25}}
                    onClick={() => {
                        createUser({
                            variables: {
                                data: {
                                    email, name, password
                                }
                            }
                        })
                            .then((data) => {
                                console.log(data);
                                refetch();
                                alert("User successfully registered");
                            })
                            .catch((e) => {
                                alert(e.message);
                            });
                    }}
                >Send
                </button>
            </div>
        </Modal>

        <button className={"open-btn"} style={{marginTop: 10}} onClick={() => setListActive(true)}> List of registered
            users
        </button>

        <Modal active={ListActive} setActive={setListActive}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                background: "grey"
            }}>
                {!loading && data?.findManyUser?.map((item) => {
                    return <div style={{
                        marginTop: 10, marginBottom: 10
                    }}
                                key={item.id}>{item.email}</div>;
                })}
            </div>
        </Modal>

        <button className={"open-btn"} style={{marginTop: 10}} onClick={() => setSignActive(true)}>Log In</button>

        <Modal active={SignActive} setActive={setSignActive}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                background: "grey"
            }}>
                <h1 style={{marginBottom: 20}}> Log In </h1>

                <input placeholder={"Email"} onChange={(e) => setLoginEmail(e.target.value)} style={{ marginTop: 10 }} type="email" />
                <input placeholder={"Password"} type={"password"} onChange={(e) => setLoginPass(e.target.value)} style={{ marginTop: 10 }} />
                <button className={"open-btn"} style={{marginTop: 20, marginBottom: 25, width: 150}}
                    onClick={() => {
                            loginUser(
                                {
                                    variables: {
                                        where: {
                                            email: loginEmail
                                        }
                                    }
                                }
                            ).then((loginData) => {
                                if (loginData.data.findUniqueUser.password === loginPass)
                                    alert("User successfully logined")
                                else
                                    alert("you are oshibka")}).catch(e => console.log(e))
                        }
                    }
                >Log in</button>
            </div>
        </Modal>

        <input style={{marginTop: 10}} placeholder={"Id"} onChange={(e) => {
            setId(e.target.value)
        }}/>
        <button className={"open-btn"} style={{marginTop: 20, marginBottom: 25, width: 150}}
                onClick={() => {
                    getUser(
                        {
                            variables: {
                                where: {
                                    id: Number(id)
                                }
                            }
                        }
                    ).then(Userdata => console.log(Userdata)).catch(e => console.log(e))
                }}
        >
            Search
        </button>
    </div>);
};

export default App;