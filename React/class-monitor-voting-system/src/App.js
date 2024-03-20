import React, { useEffect, useState } from 'react';
import './css/app.css';
import { nomination } from './db';
import Modal from '@mui/material/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [nominations, setNominations] = useState(nomination);
  const [formData, setFormData] = useState({ voter_name: '', nominee: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitVote = (e) => {
    e.preventDefault();
    console.log(formData);
    const idx = nominations.findIndex((ele) => ele.name === formData.nominee);
    if (idx !== -1) {
      const updatedNominations = [...nominations];
      updatedNominations[idx] = {
        ...updatedNominations[idx],
        voters: [...updatedNominations[idx].voters, formData.voter_name],
      };
      setNominations(updatedNominations);
    }
    setFormData({ voter_name: '', nominee: '' })
    setShowModal(false)
  };

  const getGrandTotalVotes = () => {
    return nominations.reduce((acc, curr) => acc += curr.voters.length, 0)
  }

  const deleteVoter = (ele, voter) => {
    const updatedNominations = [...nominations];
    const idx = updatedNominations.findIndex(nom => nom === ele);

    if (idx !== -1) {
      updatedNominations[idx] = {
        ...updatedNominations[idx],
        voters: updatedNominations[idx].voters.filter(v => v !== voter)
      };

      setNominations(updatedNominations);
    }
  }

  return (
    <>
      <div className='center'>
        <div className='head'>
          <h1>Class Monitor Votes</h1>
          <strong>Total Votes : {getGrandTotalVotes()}</strong>
          <button className='btn' onClick={() => setShowModal(true)}> Add New Vote </button>

        </div>

        <div className='nominations'>
          {nominations.map((ele, index) => (
            <div className='nominations__data' key={index}>
              <h2>{ele.name}</h2>
              <strong className='v-total'>Total {ele.voters.length}</strong>
              {ele.voters.map((voter, idx) => (
                <p key={idx}> -{voter} <button onClick={() => deleteVoter(ele, voter)}>Delete</button></p>
              ))}
            </div>
          ))}
        </div>

        <Modal
          open={showModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className='modal'>
            <form onSubmit={submitVote}>
              <div className='modal__content'>
                <input
                  type="text"
                  name="voter_name"
                  placeholder='Enter name'
                  value={formData.voter_name}
                  onChange={handleChange}
                />
                <select
                  name='nominee'
                  value={formData.nominee}
                  onChange={handleChange}
                >
                  <option value="" disabled selected>---Select Nominee---</option>
                  {nominations.map((nom, index) => (
                    <option key={index} value={nom.name}>{nom.name}</option>
                  ))}
                </select>

                <button type="submit">Vote</button>
                <button onClick={() => setShowModal(false)}>X</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default App;
