const router =
  require("express").Router();

router.get("/", (req, res) => {
  res.json([
    {
      title: "iPhone 15",
      price: 999
    },
    {
      title: "MacBook Pro",
      price: 1999
    }
  ]);
});

module.exports = router;
