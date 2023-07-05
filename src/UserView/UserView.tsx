import UserViewProps from "../interfaces/UserViewProps"

const UserView: React.FunctionComponent<UserViewProps> = ({ user }: UserViewProps) => {

    return (
        <>
            <h3 className="text-start p-5 m-0 bg-primary">Name: {user.first_name} {user.last_name}</h3>
            <h3 className="text-start p-5 m-0 bg-primary">Role: {user.role.split('')[0].toUpperCase() + user.role.slice(1)}</h3>
            <h3 className="text-start p-5 m-0 bg-primary">Assigned Projects: Coming Soon</h3>
            <h3 className="text-start p-5 m-0 bg-primary">Assigned Bugs: Coming Soon</h3>
            
        </>
    )
}

export default UserView