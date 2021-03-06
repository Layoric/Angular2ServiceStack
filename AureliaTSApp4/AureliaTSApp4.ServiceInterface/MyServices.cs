﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack;
using AureliaTSApp4.ServiceModel;

namespace AureliaTSApp4.ServiceInterface
{
    public class MyServices : Service
    {
        public object Any(Hello request)
        {
            return new HelloResponse { Result = "Hello, {0}!!".Fmt(request.Name) };
        }

        public object Any(Hello2 request)
        {
            return new HelloResponse { Result = "Hello, {0}!!".Fmt(request.Name2) };
        }
    }
}