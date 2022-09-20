import useAuth from "../../hooks/useAuth";

export default function LoginPage() {
  const { login, logout } = useAuth();

  const googleLogigHandle = () => {
    location.href =
      "https://api.sanpa.co.kr/oauth2/authorization/google?redirect_url=http://localhost:3000";
  };

  return (
    <div>
      <button onClick={login}>Login</button>
      {/* <button onClick={googleLogigHandle}>Logout</button> */}
    </div>
  );
}
