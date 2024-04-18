const router = require('express').Router();
const { Intro, About, Project, Contact, Course, Experience, Socials } = require('../models/portfolioModel')
const {User}  = require('../models/userModel')

// get all portfoio data
router.route('/get-portfolio-data').get(async (req, res) => {
    try {

        const intros = await Intro.find()
        const about = await About.find()
        const contact = await Contact.find();
        const projects = await Project.find()
        const courses = await Course.find();
        const experience = await Experience.find();
        const socials = await Socials.find();

        res.status(200).send({
            intro: intros[0],
            about: about[0],
            projects: projects,
            experience: experience,
            courses: courses,
            contacts: contact[0],
            socials: socials[0]
        })

    } catch (error) {
        res.status(500).send(error)
    }
})

// update intro
router.route('/update-intro').post(async (req, res) => {
    try {
        const intro = await Intro.findByIdAndUpdate(
            req.body._id, // Pass the id directly
            req.body, // Pass the update object
            { new: true } // Options: Return the updated document
        );

        res.status(200).send({
            data: intro,
            success: true,
            message: "intro updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update about
router.route('/update-about').post(async (req, res) => {
    try {
        const intro = await About.findByIdAndUpdate(
            req.body._id, // Pass the id directly
            req.body, // Pass the update object
            { new: true } // Options: Return the updated document
        );

        res.status(200).send({
            data: intro,
            success: true,
            message: "about updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// add experience
router.route('/add-experience').post(async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save()
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience added successfully"
        })

    } catch (error) {
        res.status(500).send(error)
    }
})

// update experience
router.route('/update-experience').post(async (req, res) => {
    try {
        const experience = await Experience.findByIdAndUpdate(req.body._id, req.body,{new: true})

        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Updated successfully"
        })

    } catch (error) {
        res.status(500).send(error)
    }
})

// delete experience
router.route('/delete-experience').post(async (req, res) => {
    
    try {
        const experience = await Experience.findByIdAndDelete(req.body._id)

        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience deleted successfully"
        })

    } catch (error) {
        res.status(500).send(error)
    }
})

// add project
router.route('/add-project').post(async (req, res) => {
    console.log(req.body)
    try {
        const project = new Project(req.body);
        await project.save()
        res.status(200).send({
            data: project,
            success: true,
            message: "Project added successfully"
        })

    } catch (error) {
        res.status(500).send(error)
    }
})

// update Project
router.route('/update-project').post(async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.body._id, req.body,{new: true})

        res.status(200).send({
            data: project,
            success: true,
            message: "Project Updated successfully"
        })

    } catch (error) {
        res.status(500).send(error)
    }
})

// delete project
router.route('/delete-project').post(async (req, res) => {
    
    try {
        const experience = await Project.findByIdAndDelete(req.body._id)

        res.status(200).send({
            data: experience,
            success: true,
            message: "Project deleted successfully"
        })

    } catch (error) {
        res.status(500).send(error)
    }
})

// add course
router.route('/add-course').post(async (req, res) => {
   
    try {
        const course = new Course(req.body);
        await course.save()
        res.status(200).send({
            data: course,
            success: true,
            message: "Course added successfully"
        })

    } catch (error) {
        res.status(500).send(error)
    }
})

// update course
router.route('/update-course').post(async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.body._id, req.body,{new: true})

        res.status(200).send({
            data: course,
            success: true,
            message: "Course Updated successfully"
        })

    } catch (error) {
        res.status(500).send(error)
    }
})

// delete course
router.route('/delete-course').post(async (req, res) => {
    
    try {
        const course = await Course.findByIdAndDelete(req.body._id)

        res.status(200).send({
            data: course,
            success: true,
            message: "Course deleted successfully"
        })

    } catch (error) {
        res.status(500).send(error)
    }
})


// update contacts
router.route('/update-contact').post(async (req, res) => {
   
    try {
        const contact = await Contact.findByIdAndUpdate(req.body._id, req.body,{new: true})

        res.status(200).send({
            data: contact,
            success: true,
            message: "Contact Updated successfully"
        })

    } catch (error) {
        res.status(500).send(error)
    }
})

// update socials
router.route('/update-socials').post(async (req, res) => {
   
    try {
        const social = await Socials.findByIdAndUpdate(req.body._id, req.body,{new: true})

        res.status(200).send({
            data: social,
            success: true,
            message: "Social links Updated successfully"
        })

    } catch (error) {
        res.status(500).send(error)
    }
})

// admin login
router.route('/admin-login').post(async(req, res) => {
    try {
        
        const user = await User.findOne({username: req.body.username, password: req.body.password})
        if(user){
            return res.status(200).send({
                data: user,
                success: true,
                message: "Logged in successfully"
            })
        }else{
            return res.status(200).send({
                data: user,
                success: false,
                message: "Invalid username/password"
            })
        }

    } catch (error) {
        res.status(500).send(error)
    }
})



module.exports = router;