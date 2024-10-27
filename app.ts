const resumeForm = document.getElementById('resumeForm') as HTMLInputElement|null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLInputElement|null;

if (resumeForm && resumeOutput){
resumeForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    const name=(document.getElementById('name')as HTMLInputElement).value;
    const age=(document.getElementById('age')as HTMLInputElement).value;
    const gender=(document.getElementById('gender')as HTMLInputElement).value;
    const city=(document.getElementById('city')as HTMLInputElement).value;
    const email=(document.getElementById('email')as HTMLInputElement).value;
    const phone=(document.getElementById('phone')as HTMLInputElement).value;
    const education=(document.getElementById('education')as HTMLInputElement).value;
    const experience=(document.getElementById('experience')as HTMLInputElement).value;
    const skills=(document.getElementById('skills')as HTMLInputElement).value;

    const resumeHTML =`
    <h2>Generated Resume</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>email:</strong> ${email}</p>
    <p><strong>phone:</strong> ${phone}</p>
    <p><strong>education:</strong> ${education}</p>
    <p><strong>experience:</strong> ${experience}</p>
    <p><strong>skills:</strong> ${skills}</p>

    `;
    resumeOutput.innerHTML=resumeHTML   
});
    }else{
        console.error('Form or output div not found in the DOM ');
    }