import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Create({ onActionComplete }){
    const api="https://6728190f270bd0b97554559c.mockapi.io/my_data/TeamMembers";
    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        major: ""
    });
    const handelInput=(event)=>{
        event.preventDefault();
        const{name,value}=event.target;
        setUser({...user,[name]:value});
    }
    const handelSubmit=async(event)=>{
        event.preventDefault();
        console.log(user);
        const response = await fetch(api,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(user),
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

    return (
        <>
        <Button variant="success" onClick={handleShow}>
            ADD
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>ADD</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="id" className="form-label">ID</label>
                    <input type="text" className="form-control" id="id" name="id" value={user.id} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handelInput} />
                </div>
                <div className="mb-3 mt-3">
                    <label for="age" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age" name="age" value={user.age} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="major" className="form-label">Major</label>
                    <input type="text" className="form-control" id="major" name="major" value={user.major} onChange={handelInput} />
                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={handleClose}>
                        ADD
                    </Button>
                </Modal.Footer>
            </form>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default Create