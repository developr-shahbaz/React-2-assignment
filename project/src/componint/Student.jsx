function Student(){
const students= [
    {id: 1, name : "shahbaz", age : 26, professional:"web developer"},
    {id: 2, name : "ubaid", age : 20, professional:"madical"},
    {id: 3, name : "bahadur", age : 30 ,professional:"teacher"},
    {id: 4, name : "alyan", age : 20, professional:"web developer"}]

return(
<>
<h1>Student list</h1>

{students.map((student)=>(
    <div key={student}>
        <p>name:{student.name}</p>
        <p>age:{student.age}</p>
        <p>professional:{student.professional}</p>
    </div>

))}
</>
)
}

export default Student