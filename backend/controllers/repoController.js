const createRepository = (req,res)=>{
    res.send("Repository created");
};

const getAllRepositories = (req,res)=>{
    res.send("All repositories fetched");
};

const fetchRepositoryById = (req,res)=>{
    res.send("Repositories fetched");
};

const fetchRepositoriesForCurrentUser = (req,res)=>{
    res.send("Repository for logged user fetched");
};

const updateRepositoryById = (req,res)=>{
    res.send("Repository Updated");
};

const toggleVisibilityById = (req,res)=>{
    res.send("Repository toggled");
};

const deleteRepositoryById = (req,res)=>{
    res.send("repository deleted");
};

module.exports={
    createRepository,
    getAllRepositories,
    fetchRepositoryById,
    fetchRepositoriesForCurrentUser,
    updateRepositoryById,
    deleteRepositoryById,
    toggleVisibilityById

}