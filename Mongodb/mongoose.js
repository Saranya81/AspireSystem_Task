
var mongoose=require('mongoose')

var Schema=mongoose.Schema;


var  skillSchema=new Schema({
    skillName:String,
    experience:Number,
    proficiency:String
})

var jobSeekerSchema=new Schema({
jobseekerName:String,
emailId:String,
age:Number,
certified:Boolean,
skills:[skillSchema]

})

var js=mongoose.model('jobseeker',jobSeekerSchema);
mongoose.connect("mongo://127.0.0.1:27017//test");
var jobseeker1=new js({
    jobseekerName:"Raj",
    age:22,
    emailId:"raja2test.com",
    certified:true,
    skills:[{skillName:"java",experience:1,proficiency:"beginner"},
    {skillName:"angular",experience:2,proficiency:"beginner"}
]
})
jobseeker1.save();