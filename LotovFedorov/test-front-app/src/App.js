import { useQuery, gql, useMutation, useLazyQuery } from "@apollo/client";
import { useState } from "react";
import "./App.css";

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

const LOGIN_USER = gql`
    query FindUniqueUser($where: UserWhereUniqueInput!) {
        findUniqueUser(where: $where) {
            email
            password
        }
    }
`;

const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const { loading, error, data, refetch } = useQuery(FIND_MANY_USER);
    const [
        createUser,
        {
            data: dataCreateUser,
            loading: loadingCreateUser,
            error: errorCreateUser,
        },
    ] = useMutation(CREATE_ONE_USER);
    console.log(data);

    const [
        loginUser,
        { loading: loginLoading, error: loginError, where: loginData },
    ] = useLazyQuery(LOGIN_USER);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                flexDirection: "column",
                height: "100vh",
                background: "gray",
            }}
        >
            <div className="header"></div>

            <div className="main">
                <div className="content">
                    <div className="regLog">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                flexDirection: "column",
                            }}
                        >
                            <h1>Login</h1>
                            <p style={{ marginTop: 15 }}>Email</p>
                            <input
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                            <p style={{ marginTop: 15 }}>Password</p>
                            <input
                                value={loginPassword}
                                onChange={(e) =>
                                    setLoginPassword(e.target.value)
                                }
                            />
                            <button
                                style={{
                                    marginTop: 10,
                                    width: 100,
                                    height: 30,
                                }}
                                onClick={() => {
                                    loginUser({
                                        variables: {
                                            where: {
                                                email: loginEmail,
                                            },
                                        },
                                    })
                                        .then((loginData) => {
                                            if (
                                                loginData.data.findUniqueUser
                                                    .password === loginPassword
                                            )
                                                alert(
                                                    "User successfully logined"
                                                );
                                            else alert("you are oshibka");
                                        })
                                        .catch((e) => console.log(e));
                                }}
                            >
                                Login
                            </button>
                            <p>Registred users</p>
                            <div style={{ marginTop: 10 }}>
                                {!loading &&
                                    data?.findManyUser?.map((item) => {
                                        return (
                                            <div key={item.id}>
                                                {item.email}
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                    <div className="regLog">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                flexDirection: "column",
                            }}
                        >
                            <h1>Register</h1>
                            <p style={{ marginTop: 15 }}>Email</p>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p style={{ marginTop: 15 }}>Password</p>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                style={{
                                    marginTop: 10,
                                    width: 100,
                                    height: 30,
                                }}
                                onClick={() => {
                                    createUser({
                                        variables: {
                                            data: {
                                                email,
                                                password,
                                            },
                                        },
                                    })
                                        .then((data) => {
                                            console.log(data);
                                            refetch();
                                            alert(
                                                "User successfully registered"
                                            );
                                        })
                                        .catch((e) => {
                                            alert(e.message);
                                        });
                                }}
                            >
                                Registration
                            </button>
                            <p>Registred users</p>
                            <div style={{ marginTop: 10 }}>
                                {!loading &&
                                    data?.findManyUser?.map((item) => {
                                        return (
                                            <div key={item.id}>
                                                {item.email}
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
