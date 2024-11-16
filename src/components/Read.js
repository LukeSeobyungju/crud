import axios from 'axios';
import React, {useEffect, useState} from 'react';


function Read(){
    const api="https://6728190f270bd0b97554559c.mockapi.io/my_data/TeamMembers";
    const [user,setUser] = useState([]);
    useEffect(() => {
        getUser();
      }, []);

    const getUser=()=>{
        axios
        .get(api)
        .then((item)=>{
            setUser(item.data);
        })
        .catch((err=>{
            console.log(err);
        }));
    }
    
    return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Major</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, i) => {
              return (
                <tr key={i + 1}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.major}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    );
}

export default Read;