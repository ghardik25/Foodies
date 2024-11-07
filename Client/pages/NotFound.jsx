import ViewNavbar from "../UsersTypes/View/ViewNavbar";

export default function NotFound() {
  return (
    <>
        <ViewNavbar />
        <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '620px'}}>
            <span className="m-1" style={{color: 'orange', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center'}}>
                Not Found/Session Ended
            </span>
        </section>
    </>
  )
}
