tinymce.init({
    selector: 'textarea#template-creation',
    plugins: 'anchor autolink link lists image code mergetags wordcount',
    toolbar: 'undo redo | blocks | bold italic strikethrough backcolor | mergetags | link image | align bullist numlist | code ',
    height: 750,
    editable_root: false,
    editable_class: 'editable',
    content_css: './content_styles.css',
    elementpath: false,
    mergetags_prefix: '*{',
    mergetags_suffix: '}*',
    mergetags_list: [
      {
        title: 'Client',
        menu: [
              {
                value: 'client.givenname',
                title: 'Given name'
              },
              {
                value: 'client.familyname',
                title: 'Family name'
              },
              {
                value: 'client.company',
                title: 'Company'
              }
              ]
      },
      {
        title: 'Schedule',
        menu: [
              {
                value: 'submission.date',
                title: 'Submission date'
              },
              {
                value: 'completion.date',
                title: 'Completion date'
              }
              ]
      },
    ],
  });