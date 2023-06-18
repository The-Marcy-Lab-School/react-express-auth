export default function CreateSusu() {
    return( <>
    <form method="post">
        <label>
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