namespace MCS.DataAccess
{
    using System;
    using System.ComponentModel.DataAnnotations;

    /// <summary>
    /// Base model class with identifier.
    /// </summary>
    public abstract class BaseModel
    {
        /// <summary>
        /// Object identifier.
        /// </summary>
        [Required]
        [Key]
        public Guid Id { get; set; }
    }
}
