import React, { useEffect, useState } from 'react'

import Layout from "../components/Layout";
import Error from "./_error";

const Github = () => {

  const [user, setUser] = useState([]);
  const [statusCode, setStatuscode] = useState();

  const fetchData = async () => {

    const res = await fetch("https://api.github.com/users/danieldge");

    const data = await res.json();
    const stCode = res.status > 200 ? res.status : false;

    setUser(data);
    setStatuscode(stCode);

    //console.log(data)

  }

  useEffect(() => {
    fetchData()
  }, [])

  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (

    <Layout title="My Github" footer={false}>

      <div className="row">

        <div className="col-md-4 offset-md-4 animate__animated animate__fadeIn">

          <div className="card h-100 p-4">

            <img src={user.avatar_url} alt="" className="card-img-top rounded mx-auto d-block w-50" />

            <div className="card-body d-flex flex-column text-center">

              <h2>{user.name}</h2>
              <p>{user.bio}</p>

              <br />

              <a className="btn btn-light" href={user.html_url} target="_blank" rel="noreferrer">Go to Github</a>

            </div>

          </div>

        </div>
      </div>

    </Layout>

  )

}

Github.propTypes = {};

export default Github