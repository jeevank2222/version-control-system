const createIssue = (req,res)=>{
    res.send("Issue created");
};

const updateIssueById = (req,res)=>{
    res.send("Issue updated");
};

const deleteIssueById = (req,res)=>{
    res.send("issue deleted");
};

const getAllIssues = (req,res)=>{
    res.send("All issues fetched");
};

const getIssueById = (req,res)=>{
    res.send("Repository Updated");
};


module.exports={
    createIssue,
    updateIssueById,
    deleteIssueById,
    getAllIssues,
    getIssueById
}