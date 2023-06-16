export default function CreateSusu() {
    return( <>
    <form method="post">
        <label>
        Join Susu: <input name="susuPassword" defaultValue="Enter Susu Password"  />
        <hr />
        Susu Name: <input name="susuName" defaultValue="Enter Susu Name" />
        <hr />
        Fixed Amount: <label><input type="checkbox" name ="susuAmount" value="1000"/></label>
        </label>
        <hr />
        Every Week
        <label><input type="radio" name="paymentTime" value="everyWeek" /> Every Month</label>
        <label><input type="radio" name="paymentTime" value="everyMonth" defaultChecked={true} /> Every Three Months</label>
        <label><input type="radio" name="paymentTime" value="threeMonths" /></label>
        <button type="submit">Submit form</button>
        </form>
    </>)
}
// export default function MyForm() {
//   function handleSubmit(e) {
//     // Prevent the browser from reloading the page
//     e.preventDefault();

//     // Read the form data
//     const form = e.target;
//     const formData = new FormData(form);

//     // You can pass formData as a fetch body directly:
//     fetch('/some-api', { method: form.method, body: formData });
//   }

//   return (
//     <form method="post" onSubmit={handleSubmit}>
//       <label>
//         Text input: <input name="myInput" defaultValue="Some initial value" />
//       </label>
//       <hr />
//       <label>
//         Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
//       </label>
//       <hr />
    //   <p>
    //     Radio buttons:
    //     <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
    //     <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
    //     <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
    //   </p>
//       <hr />
//       <button type="reset">Reset form</button>
//       <button type="submit">Submit form</button>
//     </form>
//   );
// }