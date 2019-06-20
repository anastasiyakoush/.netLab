using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Task1
{
    public class MathHelper
    {
        public static MathModel Calculate(int valA, int valB)
        {
            var sum = valA + valB;
            return new MathModel() { ValueA = valA, ValueB = valB, Sum = sum };
        }
    }
}
