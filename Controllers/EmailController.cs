using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace PersonalWebsite.Net.Controllers
{
    [Route("/Contact")]
    public class EmailController : ControllerBase
    {
        [HttpPost]
        public IActionResult Contact([Bind("Name, EmailAddress, Subject, Message")] Email email)
        {
            if (email == null)
            {
                Debug.WriteLine("email is null");
            }
            Debug.WriteLine($"Name: {email.Name}\n" +
                            $"Email: {email.EmailAddress}\n" +
                            $"Subject: {email.Subject}\n" +
                            $"Message: {email.Message}\n");

            Execute(email.Name, email.EmailAddress, email.Subject, email.Message).Wait();

            return Redirect("/");
        }

        static async Task Execute(string Name, string EmailAddress, string Subject, string Message)
        {
            // put key in env variable
            var apiKey = "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";
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("jason.r.bondarchuk@gmail.com", Name);
            var subject = Subject;
            var to = new EmailAddress("jason.r.bondarchuk@gmail.com");
            var plainTextContent = $"Name: {Name}\n" +
                                    $"Email: {EmailAddress}\n" +
                                    $"Subject: {Subject}\n" +
                                    $"Message: {Message}\n";
            var htmlContent = "";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
        }
    }
}