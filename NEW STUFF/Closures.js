const crust = "Crust";

const earth = () => {
    const mantle = 'Mantle';
    function message(){
        const core = 'Core';
        console.log(`The earth is made up of the ${crust}, the ${mantle} and the ${core}`);
    }
    return message;
}
const message = earth()

message()