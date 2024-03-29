using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Net;
using System.Net.Mail;
using DotNetEnv;
using Microsoft.AspNetCore.Http;

namespace PersonalWebsite.Net.Controllers
{
    
    [Route("/Contact")]
    public class EmailController : ControllerBase
    {
        [HttpPost]
        public IActionResult Contact([Bind("Name, EmailAddress, Subject, Message")] Email email)
        {
            try 
            { 
                if (email == null)
                {
                    Debug.WriteLine("email is null");
                }
                Debug.WriteLine($"Name: {email.Name}\n" +
                                $"Email: {email.EmailAddress}\n" +
                                $"Subject: {email.Subject}\n" +
                                $"Message: {email.Message}\n");

                Execute(email.Name, email.EmailAddress, email.Subject, email.Message); //.Wait();

                return Redirect("/");
            }
            catch(Exception ex)
            {
                return StatusCode(500,ex.Message);
            }
        }
        //  async Task
        static void Execute(string Name, string EmailAddress, string Subject, string Message)
        {
            Dictionary<string, string> envVariables = Env.Load().ToDictionary();
            
            var fromAddress = new MailAddress("jason.r.bondarchuk@gmail.com", "To Name");
            string fromPassword = envVariables["frompassword"];
            string subject = "Subject";
            string body = $"Name: {Name}\n" +
                                    $"Email: {EmailAddress}\n" +
                                    $"Subject: {Subject}\n" +
                                    $"Message: {Message}\n";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
            };
            using (var message = new MailMessage(fromAddress, fromAddress)
            {
                Subject = subject,
                Body = body
            })
            {
                smtp.Send(message);
            }

        }
    }
}