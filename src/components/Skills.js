import React, { useEffect, useState } from 'react';

export default function Skills({skills}) {
  const [LoggedIn,setLoggedIn]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setLoggedIn(true)
    },500)
  },[]);
  return (
    
    <div>
        <h2>List of Skills</h2>
        <ul>
            {skills.map(skill=>{
              return  <li key={skill.id}>{skill.name}</li>
            })}
        </ul>
        {LoggedIn
        ?(<button>Start working</button>)
        :(<button>Login</button>)
      }

      
    </div>
  )
}
