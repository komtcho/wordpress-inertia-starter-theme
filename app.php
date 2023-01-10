<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo wp_title('|', true, 'right'); ?></title>
    <?php wp_head(); ?>
</head>

<body>
    <?php bb_inject_inertia(); ?>
</body>

<?php wp_footer(); ?>

</html>