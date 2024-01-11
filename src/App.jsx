import "./App.css";
import { useState, useEffect } from "react";
import ContriesAPI from "./API/Contries";
import Search from "./components/Search";
import Card from "./components/card";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    if (search.length > 0) {
      const newdata = data.filter((c) =>
        c.name.common.toLowerCase().includes(search)
      );
      setNewData(newdata);
    }
  }, [search]);

  return (
    <>
      <div className="mt-10 flex justify-center">
        <h1 className="text-4xl font-bold m-5 mb-8">Cuntries</h1>
      </div>
      <div>
        <Search setSearch={setSearch} />
      </div>
      <div>
        <ContriesAPI setSearch={setSearch} setData={setData} />
      </div>
      <div>
        <div className="m-10 flex justify-center box-content">
          <div className="flex flex-wrap md:gap-10 justify-center 2xl:justify-around">
            {search.length < 1
              ? data.map((m) => (
                  <div key={m.name.common}>
                    <Card
                      name={m.name.common}
                      region={m.region}
                      area={m.area}
                      flag={m.flags.png}
                      population={m.population}
                    />
                  </div>
                ))
              : newData.map((m) => (
                  <div key={m.name.common}>
                    <Card
                      name={m.name.common}
                      region={m.region}
                      area={m.area}
                      flag={m.flags.png}
                      population={m.population}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
