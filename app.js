var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    User        = require("./models/user"),
    LocalStrategy = require("passport-local"),
    session = require("express-session"),
    methodOverride = require("method-override");
    

    
//mongoose.connect("mongodb://localhost/birdiFurniture");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));

// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

var indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Application is running");
})