import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Delete({ onActionComplete }){
    var id=0;
    const api="https://6728190f270bd0b97554559c.mockapi.io/my_data/TeamMembers";
    const[user,setUser]=useState([]);

    const handelInput=(event)=>{
        event.preventDefault();
        const{name,value}=event.target;
        setUser({...user,[name]:value});
    }

    const handelSubmit=(event)=>{
        event.preventDefault();
        fetch(api.concat("/"+id),{
            method:'DELETE',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(user),
        });
        onActionComplete();
        setUser({id: "",
            name: "",
            age: "",
            major: ""
        });
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    id=user.id;

    return(
        <>
        <Button variant="danger" onClick={handleShow}>
            DELETE
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>DELETE</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="id" className="form-label">ID</label>
                    <input type="text" className="form-control" id="id" name="id" value={user.id} onChange={handelInput} />
                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={handleClose}>
                        DELETE
                    </Button>
                </Modal.Footer>
            </form>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default Delete