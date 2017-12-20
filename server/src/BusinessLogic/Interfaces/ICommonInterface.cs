namespace MCS.BusinessLogic
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using MCS.DataAccess;
    using System;

    public interface ICommonInterface<TModel, in TDataContract> where TModel : BaseModel
    {
        Task<IEnumerable<TModel>> GetAsync();

        Task<RequestResult<TModel>> GetAsync(string id);

        Task<RequestResult<TModel>> PostAsync(TDataContract userData, Guid userId);

        Task<RequestResult<TModel>> PutAsync(string id, TDataContract userData, Guid userId);

        Task<RequestResult<TModel>> DeleteAsync(string id);
    }
}
