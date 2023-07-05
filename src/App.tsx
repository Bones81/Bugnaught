import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header/header'
import InfoPanel from './InfoPanel/infopanel'
import Bug from './interfaces/Bug'
import CommentType from './interfaces/CommentType'
import Dashboard from './Dashboard/dashboard'
import Footer from './Footer/footer'
import Project from './interfaces/Project'
import UserType from './interfaces/UserType'

const App: React.FunctionComponent = () => {
  // const API_URL = 'https://bugnaughtbe.onrender.com/api/'
  const API_URL = 'http://localhost:3000/api/'

  const [view, setView] = useState("projects-view");
  const [users, setUsers] = useState<UserType[]>([])
  const [comments, setComments] = useState<CommentType[]>([])
  
  
  const mockBugs: Bug[] = [
    {id: 1, name: 'Data issue', pid: 1, status: "open", priority: 'high', developer: { id: 1, first_name: "Nathan", last_name: "Freeman", role: "admin" }, description: 'No real data yet!', comments: null, created_at: "", updated_at: ""},
    {id: 2, name: 'Can\'t add comments', pid: 1, status: "open", priority: 'medium', developer: { id: 1, first_name: "Nathan", last_name: "Freeman", role: "admin" }, description: 'Cannot add comments to bug yet!', comments: null, created_at: "", updated_at: ""},
    {id: 3, name: 'Needs Bootstrap', pid: 1, status: "closed", priority: 'low', developer: { id: 1, first_name: "Sujan", last_name: "Trivedi", role: "manager" }, description: 'Bootstrap not integrated!', comments: null, created_at: "", updated_at: ""},
    {id: 4, name: 'Colors are bad', pid: 2, status: "assigned", priority: 'high', developer: { id: 1, first_name: "Nathan", last_name: "Freeman", role: "admin" }, description: 'Needs better colors', comments: null, created_at: "", updated_at: ""},
    {id: 5, name: 'Blur not working on mobile', pid: 2, status: "open", priority: 'medium', developer: { id: 1, first_name: "Sujan", last_name: "Trivedi", role: "manager" }, description: 'Blur not working on mobile, even though it looks fine in devTools', comments: null, created_at: "", updated_at: ""},
    {id: 6, name: 'Database speed', pid: 2, status: "closed", priority: 'low', developer: { id: 1, first_name: "Sujan", last_name: "Trivedi", role: "manager" }, description: 'Data takes too long to load from spun down servers!', comments: null, created_at: "", updated_at: ""},
    {id: 7, name: 'Layout too simple', pid: 3, status: "open", priority: 'high', developer: null, description: 'Needs pizazz; maybe parallax?', comments: null, created_at: "", updated_at: ""},
    {id: 8, name: 'Old images', pid: 3, status: "open", priority: 'medium', developer: null, description: 'Needs some fresh imagery', comments: null, created_at: "", updated_at: ""},
    {id: 9, name: 'Colors', pid: 3, status: "open", priority: 'low', developer: null, description: 'Too much pastel; Find new, more dramatic color scheme.', comments: null, created_at: "", updated_at: ""}
  ]
  
  // localStorage.removeItem("BUGNAUGHT_BUGS") // development use only when resetting of bugs is needed
  // This two lines should set the initial bugs array from localStorage, if it already exists; otherwise it will initialize bugs with an empty array
  const initialBugs: Bug[] = localStorage.getItem("BUGNAUGHT_BUGS") && JSON.parse(localStorage.getItem("BUGNAUGHT_BUGS") || "[]") || mockBugs
  const [bugs, setBugs] = useState<Bug[]>(initialBugs)
  
  const [projects, setProjects] = useState<Project[]>([])
  
  
  const getUsers = async () => {
    const jsonUsers = await fetch(API_URL + 'users')
    .then( res => res.json())
    .catch( err => console.error(err))
    setUsers(jsonUsers);
  }
  
  const getUser = async (user_id: number) => {
    const jsonUser = await fetch(API_URL + 'users/' + user_id)
    .then ( res => res.json())
    .catch (err => console.error(err))
    setUser(jsonUser)
  }

  const defaultUser: UserType = {first_name: 'No User', last_name: 'Assigned', id: 0, role: 'none'}
  
  const [user, setUser] = useState<UserType>(defaultUser)

  const getProjects = async () => {
    const jsonProjects = await fetch(API_URL + 'projects')
      .then( res => res.json())
      .catch( err => console.error(err))
    // console.log(jsonProjects);

    // before returning projects, we have to populate the bugs field on each project by matching any ids in the JSON <project>.bugs array with the corresponding id from our bugs data.
    const formattedProjects: Project[] = jsonProjects.map( (proj: any) => {
      // find team lead User object
      const teamLeadData = users.find( (user: UserType) => user.id === proj.team_lead)

      // find all Bug type bugs to fill the bugs value
      const bugsIdList = JSON.parse(proj.bugs)
      const foundBugs = bugsIdList.map( (bid: number) => {
        return bugs.find( b => b.id === bid )
      })

      // find all UserType users for assigned_devs
      const userIdList = JSON.parse(proj.assigned_devs)
      const foundUsers = userIdList.map( (uid: number) => {
        return users.find( u => u.id === uid)
      })      

      return {
        id: proj.id,
        name: proj.name,
        bugs: foundBugs,
        team_lead: teamLeadData,
        assigned_devs: foundUsers

      }
    })

    setProjects(formattedProjects);
  }

  const getBugs = async () => {
    const jsonBugs = await fetch(API_URL + 'bugs')
      .then( res => res.json())
      .catch( err => console.error(err))
    // console.log(jsonBugs)

    // before returning bugs, we have to populate the comments field on each bug by matching any ids in the JSON <bug>.comments array with the corresponding id from our comments data.
    const formattedBugs: Bug[] = jsonBugs.map( (bug: any) => {
      // get UserType developer data
      
      const developerData = users.find( user => user.id === bug.developer) || null

      // get CommentType[] from comments array
      const commentIdList = JSON.parse(bug.comments)
      const foundComments: CommentType[] = commentIdList.map( (cid: number) => {
        return comments.find( c => c.id === cid)
      })

      if (developerData !== undefined) {
        return {
          id: bug.id,
          name: bug.name,
          status: bug.status,
          priority: bug.priority,
          developer: developerData,
          description: bug.description,
          pid: bug.project_id,
          comments: foundComments,
          created_at: new Date(bug.created_at).toLocaleString(),
          updated_at: (() => {
            if (!bug.updated_at) {
              return new Date(bug.created_at).toLocaleString()
            } else {
              return new Date(bug.updated_at).toLocaleString()
            }
          })() // IIFE that assigns created_at date if no updated_at value is found
        }
      } else {
        throw new Error("Could not match User id to Bug developer.")
      }
    })

    setBugs(formattedBugs);
    
  }

  const getComments = async () => {
    const jsonComments = await fetch(API_URL + 'comments')
      .then( res => res.json())
      .catch( err => console.error(err))
    
    // match fields to client-side CommentType
    const formattedComments: CommentType[] = jsonComments.map( (comment: any) => {
      const authorData = users.find( user => user.id === comment.author)
      if(authorData !== undefined) {
        return {
          id: comment.id,
          author: authorData,
          bid: comment.bug_id,
          pid: comment.project_id,
          content: comment.content,
          created_at: new Date(comment.created_at).toLocaleString() // creates new date based on string obtained from backend and converts it to local datetime string
        }
      } else {
        throw new Error("Could not match any User id to Comment's author id");
      }

    })
    
    setComments(formattedComments);
    
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    getComments(),
    getUser(Math.floor(Math.random() * users.length))
  }, [users])

  useEffect(() => {
    getBugs()
  }, [comments])

  useEffect(() => {
    getProjects()
  }, [bugs])

  return (
    <>
      <Header setView={setView} />
      <div className="container-fluid mb-5">
        <div className="row justify-content-around align-items-center my-3 gx-3">
          <div className="col-xl-3 align-self-start mt-5">
            <InfoPanel 
              projects={projects} 
              setProjects={setProjects} 
              setView={setView}
              user={user}
            />
          </div>
          <div className="col-xl-8">
            <Dashboard 
              projects={projects} 
              view={view} 
              setView={setView} 
              bugs={bugs} 
              setBugs={setBugs} 
              comments={comments} 
              setComments={setComments}
              users={users}
              user={user}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
