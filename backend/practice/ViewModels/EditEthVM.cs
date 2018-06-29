using System.ComponentModel.DataAnnotations;

namespace practice.ViewModels
{
    public class EditEthVM
    {
        [Required(ErrorMessage = "Empty_Address")]
        public string EtheriumAddress { get; set; }
    }
}