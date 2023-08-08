function MissingRange(nums)
{
    if (!nums || nums.length === 0) return [];
    if (nums.length === 1) return [nums[0].toString()];
    let result = [];
    let start = nums[0];
    let end = nums.at(-1);
    if (start !== 0) {
        result.push(start > 1 ? `${start - 1}->${start - 1}` : start.toString());
    }

    for (let i = 0; i < nums.length - 1; i++)
    {
        if (nums[i] + 1 != nums[i + 1])
        {
            let  range = nums[i] + 1 == (nums[i + 1] - 1) ? (nums[i] + 1).toString() : (nums[i] + 1) + "->" + (nums[i + 1] - 1);
            console.log(range);
           result.push(range);
        }
    }
    if (end != 99)
    {
        result.push((end + 1) + "->" + 99);
    }
    return result;
}

export{ MissingRange};