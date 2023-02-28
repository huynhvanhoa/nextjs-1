import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function adminUser() {
  const router = useRouter();

  console.log("router", router);

  const handlerOnClick = () => {
    router.push("/");
  };

  const style = {
    marginLeft: 50,
    color: "red",
  };

  return (
    <>
      <Head>
        <title>Admin-user {router.query.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>admin - User page {router.query.id}</h1>
        <button onClick={handlerOnClick}>Go to HomePage</button>
        <button onClick={() => router.push("/admin")} style={style}>
          Go to AdminPage
        </button>
        <Link href="/" style={style}>
          Go to HomePage
        </Link>
      </div>
    </>
  );
}
