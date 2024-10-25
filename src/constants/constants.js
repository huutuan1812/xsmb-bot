const poeticVerses = {
    0: "Hai không như một, chỉ là con số tròn.",
    1: "Một mảnh ghép trong trò chơi cuộc đời.",
    2: "Hai ta cùng hợp sức, vượt mọi thử thách.",
    3: "Ba thứ trong túi, chẳng biết cái nào cần.",
    4: "Bốn mùa đổi thay, đừng chờ đợi mà phí hoài.",
    5: "Năm lần bảy lượt, chỉ cần kiên trì là được.",
    6: "Sáu thứ cần lắm, mà hay quên là khổ.",
    7: "Bảy sắc cầu vồng, tìm đâu cho thấy bầu trời.",
    8: "Tám ngọn nến thắp, sáng rực trong đêm tối.",
    9: "Chín trăm phương trời, chưa chắc đã tìm ra.",
    10: "Mười điều ước, nhưng lại quên hết tên.",
    11: "Một một hai hai, đếm hoài chẳng hết.",
    12: "Một và hai, cùng nhau kết hợp.",
    13: "Một ba không bận, chờ chi đến số khác.",
    14: "Một bốn ngày xưa, không ai nhớ hết.",
    15: "Một năm rưỡi, mới thấy tấm lòng chân thật.",
    16: "Một sáu, chớ vội, hãy chờ thời cơ.",
    17: "Một bảy lội ngược, không ngại gì khó khăn.",
    18: "Một tám vững chãi, cuộc sống sẽ bền lâu.",
    19: "Một chín, chưa từng gặp, phải đi một vòng.",
    20: "Hai mươi con đường, đi đâu cũng phải chọn.",
    21: "Hai mươi một, đếm ngược lại cho kịp.",
    22: "Hai hai cặp đôi, cuộc sống thêm rộn ràng.",
    23: "Hai ba gác cổng, đừng lầm đường lạc lối.",
    24: "Hai bốn tiếng cười, xua tan mọi phiền muộn.",
    25: "Hai năm bận rộn, cuối cùng cũng được nghỉ.",
    26: "Hai sáu con đường, lựa chọn thật cẩn thận.",
    27: "Hai bảy điều ước, chẳng đợi chờ ai.",
    28: "Hai tám thung dung, sống đời bình yên.",
    29: "Hai chín, chưa đủ, phải chờ thêm chút nữa.",
    30: "Ba mươi hối hả, sống chậm lại cho thảnh thơi.",
    31: "Ba mươi một, dừng lại để ngắm hoa.",
    32: "Ba hai sướng khổ, tự mình quyết định.",
    33: "Ba ba mãi mãi, vững vàng qua sóng gió.",
    34: "Ba bốn không ngại, cùng nhau vượt mọi thử thách.",
    35: "Ba năm hy vọng, chờ đợi ngày tươi sáng.",
    36: "Ba sáu cuộc sống, phải có mục tiêu rõ ràng.",
    37: "Ba bảy tươi vui, mỗi ngày thêm yêu đời.",
    38: "Ba tám bình an, giữ mãi trong lòng.",
    39: "Ba chín phải nhớ, chớ để lỡ hẹn.",
    40: "Bốn mươi con đường, lựa chọn thật cẩn thận.",
    41: "Bốn mươi một, nhấc chân lên và đi.",
    42: "Bốn hai cùng nhau, giữ vững niềm tin.",
    43: "Bốn ba lăn lộn, nhưng vẫn không từ bỏ.",
    44: "Bốn bốn kiên trì, vượt mọi bão táp.",
    45: "Bốn năm ngọt ngào, sống hết mình với yêu thương.",
    46: "Bốn sáu không bận, sống vui vẻ mỗi ngày.",
    47: "Bốn bảy phấn khởi, tìm kiếm điều mới.",
    48: "Bốn tám cánh đồng, hòa mình vào thiên nhiên.",
    49: "Bốn chín mãi mãi, không quên những gì đã qua.",
    50: "Năm mươi chờ đợi, nhưng chẳng bao giờ hết.",
    51: "Năm mươi một, sống cho riêng mình.",
    52: "Năm hai đôi khi, cuộc sống cũng rắc rối.",
    53: "Năm ba vẫn sống, chẳng phải lo âu.",
    54: "Năm bốn bình yên, tận hưởng từng khoảnh khắc.",
    55: "Năm năm đáng nhớ, đừng bao giờ quên.",
    56: "Năm sáu nhắc nhở, hãy luôn cố gắng.",
    57: "Năm bảy sáng suốt, chớ để vuột mất.",
    58: "Năm tám không ngại, tiếp tục cố gắng.",
    59: "Năm chín kiên định, chờ đợi điều tốt đẹp.",
    60: "Sáu mươi hoài niệm, sống mãi trong ký ức.",
    61: "Sáu mươi một lần, hãy làm điều mới.",
    62: "Sáu hai chờ đợi, tương lai đang đến.",
    63: "Sáu ba luôn tươi, cuộc sống thêm tươi đẹp.",
    64: "Sáu bốn không chờ, hãy hành động ngay.",
    65: "Sáu năm một thói quen, hãy giữ vững nhé.",
    66: "Sáu sáu vui vẻ, sống hết mình với đam mê.",
    67: "Sáu bảy đừng chần chừ, quyết định ngay.",
    68: "Sáu tám trải nghiệm, thêm nhiều bài học.",
    69: "Sáu chín vững bước, không gì cản nổi.",
    70: "Bảy mươi hành trình, tự tin từng bước.",
    71: "Bảy mươi một, chẳng sợ con đường dài.",
    72: "Bảy hai đi xa, không lùi bước về.",
    73: "Bảy ba quyết tâm, mọi khó khăn đều vượt.",
    74: "Bảy bốn luôn nhớ, sống thật ý nghĩa.",
    75: "Bảy năm chờ đợi, cuộc sống tràn ngập niềm vui.",
    76: "Bảy sáu mãi mãi, luôn hướng về tương lai.",
    77: "Bảy bảy gắng sức, không ngại gian khổ.",
    78: "Bảy tám mở cửa, chào đón điều mới.",
    79: "Bảy chín đừng quên, hãy sống hết mình.",
    80: "Tám mươi kỷ niệm, lưu giữ trong lòng.",
    81: "Tám mươi một lần, sống cho hôm nay.",
    82: "Tám hai phấn khởi, bắt đầu một hành trình.",
    83: "Tám ba không chờ, làm ngay điều bạn thích.",
    84: "Tám bốn cố gắng, đừng để lỡ nhịp.",
    85: "Tám năm hy vọng, chờ ngày tươi sáng.",
    86: "Tám sáu đầy sức sống, khởi đầu mới.",
    87: "Tám bảy luôn vui, cuộc sống thêm rực rỡ.",
    88: "Tám tám không sợ, vượt qua mọi bão táp.",
    89: "Tám chín học hỏi, tìm ra chân lý.",
    90: "Chín mươi khát vọng, đừng từ bỏ mơ ước.",
    91: "Chín mươi một, nỗ lực từng ngày.",
    92: "Chín hai không chờ, hành động ngay bây giờ.",
    93: "Chín ba tin tưởng, mọi điều sẽ đến.",
    94: "Chín bốn không nản, cuộc sống đang chờ.",
    95: "Chín năm tràn đầy nhiệt huyết, sống trọn vẹn.",
    96: "Chín sáu đừng quên, hãy sống cho hiện tại.",
    97: "Chín bảy chúc phúc, niềm vui luôn tới.",
    98: "Chín tám nguyện cầu, hạnh phúc sẽ mãi.",
    99: "Chín mươi chín, cuộc sống là một hành trình."
};

module.exports = poeticVerses;