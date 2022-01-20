import { useEffect, useState } from "react";

function UserProfile({ user, myJournals, setJournals }) {

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/editprofile", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({

          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => console.log(user));
          }
        });
      }
   

    // useEffect(() => {

    //   fetch("/myJournals")
    //   .then(r => r.json())
    //   .then(journals => {
    //     setJournals(journals)
    //     console.log(journals)
    //   })
        
    // }, [])

    function renderJournals(){
      if (myJournals) {
        return myJournals.map(journal => {
            return (
                <div className="content-wrap">
                    <h3>
                        {journal.title}
                    </h3>
                    <p>
                      Written by {user.first_name}
                    </p>
                    <p>
                        {journal.body}
                    </p>
                </div>
            )
        })
        } else {
          return <p>Begin your story...</p>
        }
       } 
        
    
    return (

      <div className="content">
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Edit User Settings</h1>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              placeholder={user.username}
            />
            <label>First Name </label>
            <input type="text" name="first-name"  placeholder={user.first_name} />
            <label>Last Name </label>
            <input type="text" name="last-name"  placeholder={user.last_name} />
            <label>Nickname </label>'
            <input type="text" name="nickname"  placeholder={user.nickname} />
            <label>Email</label>
            <input type="text" name="email"  placeholder={user.email} />
            <label>Hero Archetype</label>
            <select name="archetype" placeholder={user.archetype}>
                <option value="Seeker">Seeker</option>
                <option value="Innocent">Innocent</option>
                <option value="Orphan">Orphan</option>
                <option value="Fool (Jester)">Fool (Jester)</option>
                <option value="Sage (Senex)">Sage</option>
                <option value="King">King</option>
                <option value="Creator">Creator</option>
                <option value="Rebel">Rebel</option>
                <option value="Magician">Magician</option>
                <option value="Caregiver">Caregiver</option>
                <option value="Love">Lover</option>
                <option value="Warrior">Warrior</option>
            </select>
            <button type="submit">Update Profile</button>
          </form>
        </div>
        {renderJournals()}
      </div>
    ) 
}

export default UserProfile;