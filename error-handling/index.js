
exports.handleInvalidEndpoint =
    ("*",
    (req, res) => {
        res.status(404).send({ status: 404, msg: "Endpoint Not Found" });
    });


exports.handleCustomErrors = (err, req, res, next) => {
    if (err.status && err.msg) {
        res.status(err.status).send({ msg: err.msg });
    } else next(err);
};


exports.handleServerErrors = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "Internal Server Error" });
};