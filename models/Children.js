const mongoose = require('mongoose');

const ChildrenSchema = new mongoose.Schema({
  childName: {
    type: String,
    required: [true, 'Please add a name'],
  },
  childGender: {
    type: String,
    enum: ['ذكر', 'انثي'],
    default: 'ذكر',
  },
  registerNumber: {
    type: String,
    required: [true, 'Please add register number'],
  },
  registerDate: {
    type: String,
    required: [true, 'Please add register date'],
  },
  birthDate: {
    type: String,
    required: [true, 'Please add birth date'],
  },
  birthPlace: {
    type: String,
    required: [true, 'Please add birth place'],
  },
  vaccination: {
    type: [Object],
    default: [
      {
        name: 'Hepatitis B',
        nameArabic: 'التهاب الكبد الوبائي',
        date: 'عند الولاده وايضا بعد 15 يوم بعد الولاده',
        description: 'هو عدوي فيروسية تصيب الكبد',
        benefits:
          'اعطاء جرعة عند الولادة في الوقت المناسب هو تدبير فعال للحد من انتقال العدوي من الام الي الطفل ',
        harm: 'يسبب ارتفاع في درجة الحراره',
        additionalVacc: 'لا يوجد',
        taken: false,
      },
      {
        name: 'poliomyelitis',
        nameArabic: 'شلل الاطفال',
        date: 'عند الولاده وايضا بعد 15 يوم بعد الولاده',
        description:
          'شلل الاطفال مرض فيروسي شديد العدوي يغزو الجهاز العصبي وهو كفيل باحداث الشلل التام في غضون ساعات من الزمن',
        benefits:
          'لقاح الشلل الذي يعطي علي دفعات متعددة يمكن ان يقي الطفل من شر المرض مدي الحياة',
        harm:
          'تتمثل اعراض المرض الاوليه في الحمي والتعب والصداع والتقيؤ وتصلب الرقبة والشعور بالم في الاطراف',
        additionalVacc: 'لا يوجد',
        taken: false,
      },
      {
        name: 'Tuberculosis',
        nameArabic: 'الدرن',
        date: 'عند الولاده وايضا بعد 15 يوم بعد الولاده',
        description: 'سيل من البكتيريا تصيب الرئتين في معظم الاحيان',
        benefits: 'علاج المرض والوقايه منه',
        harm:
          'تتمثل اعراض المرض الشائعه في السعال مع البلغم والدم احيانا والضعف وفقدان الوزن والحمي وافراز العرق ليلا',
        additionalVacc: 'لا يوجد',
        taken: false,
      },
      {
        name: 'Five-in-one vaccination',
        nameArabic: 'التطعيم الخماسي',
        date: 'عند بلوغ الطفل شهرين',
        description:
          'هو تطعيم يحمي ويقي الطفل من خمسة مراض هي شلل الاطفال والدفتيريا والتيتانوس والسعال الديكي والتهاب الكبد الوبائي',
        benefits: 'الوقايه من خمس امراض',
        harm: 'ارتفاع درجة حرارة الطفل',
        additionalVacc: 'فيروس الروتا والانفلونزا البكتيريه والاتهاب الرئوي',
        taken: false,
      },
      {
        name: 'Five-in-one vaccination',
        nameArabic: 'التطعيم الخماسي',
        date: 'عند بلوغ الطفل 6 اشهر',
        description:
          'هو تطعيم يحمي ويقي الطفل من خمسة مراض هي شلل الاطفال والدفتيريا والتيتانوس والسعال الديكي والتهاب الكبد الوبائي',
        benefits: 'الوقايه من خمس امراض',
        harm: 'ارتفاع درجة حرارة الطفل',
        additionalVacc: 'فيروس الروتا والانفلونزا البكتيريه والاتهاب الرئوي',
        taken: false,
      },
      {
        name: 'poliomyelitis',
        nameArabic: 'شلل الاطفال',
        date: 'عند بلوغ الطفل 9 اشهر',
        description:
          'شلل الاطفال مرض فيروسي شديد العدوي يغزو الجهاز العصبي وهو كفيل باحداث الشلل التام في غضون ساعات من الزمن',
        benefits:
          'لقاح الشلل الذي يعطي علي دفعات متعددة يمكن ان يقي الطفل من شر المرض مدي الحياة',
        harm:
          'تتمثل اعراض المرض الاوليه في الحمي والتعب والصداع والتقيؤ وتصلب الرقبة والشعور بالم في الاطراف',
        additionalVacc: 'لا يوجد',
        taken: false,
      },
      {
        name: 'Triple vaccination-(mmr)',
        nameArabic: 'التطعيم الثلاثي + شلل الاطفال',
        date: 'عند بلوغ الطفل 12 شهر',
        description: 'الحصبة والحصبة الالمانية والنكاف ',
        benefits:
          'يساعد التطعيم علي تنشيط الجهاز المناعي للطفل لانتاج مضادات لهذه الامراض',
        harm: 'ارتفاع درجة حرارة وسعال جاف مع سيلان الانف واتهاب الحلق واليعن',
        additionalVacc: 'الجدري المائي والتهاب الكبد الوبائي',
        taken: false,
      },
      {
        name:
          'poliomyelitis, Five-in-one vaccination, Triple vaccination-(mmr)',
        nameArabic: ' شلل الاطفال و التطعيم الخماسي و التطعيم الثلاثي',
        date: 'عند بلوغ الطفل 18 شهر',
        description: 'تكملة الجرعة لهذه التطعيمات لتفادي المرض',
        benefits: 'الوقاية والتحصين من الامراض',
        harm: 'احتمالية اصابة الطفل بالامراض',
        additionalVacc: 'جرعة منشطه ضد الانفلونزا البكتيرية والاتهاب الرئوي',
        taken: false,
      },
      {
        name: 'additional Vaccination',
        nameArabic: 'تطعيمات اضافيه',
        date: 'عند بلوغ الطفل 24 شهر',
        description: 'تطعيم اضافي لتحصين الطفل',
        benefits: 'حماية الطفل',
        harm: 'احتمالية اصابة الطفل',
        additionalVacc: 'الحمي الشوكية و التهاب الكبد الوبائي',
        taken: false,
      },
    ],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Children', ChildrenSchema);
