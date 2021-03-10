const {Note} = require('../models');

const getAllNotes =  async (req, res) =>{
    try{
         const notes = await Note.find();
         return res.status(200).json({
             notes
         })
    } catch (error){
        return res.status(500).json({
            error
        })
    };
};

const addNote = async (req,res) =>{
    try{
      const note =new Note({
          title: req.body.title,
          body:req.body.body
      })
      await note.save();

      return res.status(201).json({
          note
      })
    }catch (error){
        console.log(error)
        return res.status(200).json({
            error
        })
    }
};

const getNoteById = async (req,res)=>{
    try{
      const note = await Note.findById(req.params.id)
      res.status(200).json({
          note
      })

    }catch (error){
        return res.status(500).json({
            error,
        });
    }
};

const editNote = async (req,res)=>{
    try{
        const note = await Note.findById(req.params.id)
        // const note = await Note.findByIdAndUpdate(req.params.id , {
        //     title: req.body.title,
        //     body: req.body.body
        // });

        if(!note){
            return res.status(404).json({
                error: "Note not found!!"
            })
        }
        note.title = req.body.title;
        note.body = req.body.body;

        await note.save();

        return res.status(200).json({
            note
        })
    } catch (error){
        console.log(error)
        return res.status(500).json({
            error,
        });

    }
}

const deleteNote = async (req,res)=>{
    try{
        const note = await Note.findById(req.params.id)
      

        if(!note){
            return res.status(404).json({
                error: "Note not found!!"
            })
        }
        
        await note.delete() 
        return res.status(200).json({
            message:'note deleted',
            note
        })
    } catch (error){
        console.log(error)
        return res.status(500).json({
            error,
        });

    }
}
module.exports = {
    getAllNotes,
    addNote,
    getNoteById,
    editNote,
    deleteNote
}