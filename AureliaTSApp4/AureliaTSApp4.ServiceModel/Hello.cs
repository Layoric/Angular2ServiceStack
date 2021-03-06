﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack;

namespace AureliaTSApp4.ServiceModel
{
    [Route("/hello")]
    [Route("/hello/{Name}")]
    public class Hello : IReturn<HelloResponse>
    {
        public string Name { get; set; }
    }

    public class HelloResponse
    {
        public string Result { get; set; }
    }

    [Route("/hello2")]
    [Route("/hello2/{Name2}")]
    public class Hello2 : IReturn<HelloResponse>
    {
        public string Name2 { get; set; }
    }
}