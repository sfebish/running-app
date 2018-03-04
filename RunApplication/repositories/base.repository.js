// This class is the base level class for all database queries
// Each model we have should have a repository that inherits from this.
// All methods return a promise
export class BaseRepository {
    constructor(model, bodyToEntityFunc) {
        this.model = model;
        this.bodyToEntityFunc = bodyToEntityFunc;
    }

    // Returns all entities from the given model
    getAll() {
        return this.model.find().exec();
    }

    // Returns one entity that matches the given id
    getById(id) {
        return this.model.findById(id).exec();
    }

    // Creates a new entity. 
    // entityOverride is an optional parameter to bypass the bodyToEntityFunc
    // i.e. use entityOverride if you only want to update one (or a subset) of the properties
    // set in the bodyToEntityFunc
    create(body, entityOverride) {
        return this.model.create(entityOverride
            ? entityOverride
            : this.bodyToEntityFunc(body));
    }

    // Updates a given entity.
    // entityOverride is an optional parameter to bypass the bodyToEntityFunc
    // i.e. use entityOverride if you only want to update one (or a subset) of the properties
    // set in the bodyToEntityFunc
    updateOne(id, body, entityOverride) {
        const crit = { _id: id };
        const opts = { new: true, multi: false };
        const entity = entityOverride
            ? entityOverride
            : this.bodyToEntityFunc(body);

        return this.model.findOneAndUpdate(crit, entity, opts).exec();
    }

    // Finds an entity by id and then deletes it
    deleteEntity(id) {
        return this.model.findByIdAndRemove(id).exec();
    }
}