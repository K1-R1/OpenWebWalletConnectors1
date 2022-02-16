async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await ethereum.request({ method: "eth_requestAccounts" });
    }
}
async function execute() {

}

module.exports = {
    connect,
    execute,
};