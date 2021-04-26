using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Application.Invoices.Commands;
using CleanArchitecture.Application.Invoices.Queries;
using CleanArchitecture.Application.Invoices.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanArchitecture.Api.Controllers
{
    //[Route("api/[controller]")]
   // [ApiController]

    [Authorize]
    public class InvoicesController : ApiController
    {
      
            private readonly ICurrentUserService _currentUserService;

            public InvoicesController(ICurrentUserService currentUserService)
            {
                _currentUserService = currentUserService;
            }

            [HttpPost]
            public async Task<ActionResult<int>> Create(CreateInvoiceCommand command)
            {
                return await Mediator.Send(command);
            }

            [HttpGet]
            public async Task<IList<InvoiceVm>> Get()
            {
                return await Mediator.Send(new GetUserInvoicesQuery { User = _currentUserService.UserId });
            }
        }
    }

