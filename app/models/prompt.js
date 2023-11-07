import mongoose, {Schema,model,models} from "mongoose";


const promptSchema = new Schema({

    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',

    }
,
prompt: {

    type:String,
    required: [true, 'prompt is required'],

},
tag: {
    type:String,
    required: [true, "a tag is required"]
}
    // on créer un schéma dans la bdd mango , en rajoutant le créateur d'un poste,  et letype de cet object correspond à l'objectId d'un autre schema de données ( a savoir un user id ici)
,
createdAt: {
    type: Date,
    default: Date.now // La date et l'heure actuelles seront automatiquement définies lors de la création du document.
}

})

const Prompt = models.Prompt || model('Prompt', promptSchema)


export default  Prompt;


