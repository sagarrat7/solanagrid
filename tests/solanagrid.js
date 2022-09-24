const anchor = require("@project-serum/anchor");

const main = async() => {
  console.log("🚀 Starting test...")

  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.Solanagrid;
  const tx = await program.methods.startStuffOff().rpc();
  console.log("📝 Your transaction signature", tx);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();

